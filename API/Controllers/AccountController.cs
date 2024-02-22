using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using API.Data;
using API.DTOS;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        private readonly iTokenService _tokenService;

        private const string USER_PASSWORD_ERROR_MESSAGE ="Usuario o contraseña incorrectos";
        public AccountController(DataContext context, iTokenService tokenService)
        {
            _context = context;

            _tokenService = tokenService;
            
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register (RegisterDto registerDto)
        {
            if (await UserExists(registerDto.UserName)) 
                return BadRequest("Ya existe ese nombre de usuario");

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerDto.UserName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

             return new UserDto
          {
            Username = user.UserName,
            Token = _tokenService.CreateToken(user)
          };
        }

        [HttpPost("Login")]

        public async Task<ActionResult<UserDto>> Login  (LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x=> 
                x.UserName.ToLower()==loginDto.Username.ToLower());

            if(user==null) return Unauthorized(USER_PASSWORD_ERROR_MESSAGE);

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var ComputedHash = hmac.ComputeHash (Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i =0 ; i< ComputedHash.Length;i++)
            {
                if(ComputedHash[i]!= user.PasswordHash[i]) return Unauthorized(USER_PASSWORD_ERROR_MESSAGE);
            }

            return new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };     
        }
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x=>x.UserName == username.ToLower());
        }
    }
    
}
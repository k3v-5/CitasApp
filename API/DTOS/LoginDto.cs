using System.ComponentModel.DataAnnotations;

namespace API.DTOS
{
    public class LoginDto
    {
        [Required]
        public string Username {get; set;}
        
        public string Password {get; set;}
    }
}
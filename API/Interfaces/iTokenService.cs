using API.Entities;

namespace API.Interfaces
{
    public interface iTokenService
    {
        string CreateToken(AppUSer user);
    }
}
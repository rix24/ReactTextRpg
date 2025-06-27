using Microsoft.AspNetCore.Mvc;

namespace ReactTextRpgApi.Controllers{

    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class RegisterRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase{
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request) {
            // Simple validation - replace with real authentication
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { message = "Username and password are required" });
            }

            // Placeholder logic - replace with actual authentication
            if (request.Username == "a" && request.Password == "a")
            {
                return Ok(new { 
                    message = "Login successful", 
                    token = "sample-jwt-token",
                    user = new { username = request.Username }
                });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request) {
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password) || string.IsNullOrEmpty(request.Email))
            {
                return BadRequest(new { message = "All fields are required." });
            }

            // Placeholder logic - replace with actual registration
            return Ok(new { 
                message = "Registration successful",
                user = new { username = request.Username, email = request.Email }
            });

            return Ok(new { message = "Registration successful", user = new { username = request.Username, email = request.Email } });
        }
    }    
}
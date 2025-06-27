using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Force Development environment, will need to change this eventually and figure out how to handle different environments
builder.Environment.EnvironmentName = "Development";

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ReactTextRpg API", Version = "v1" });
});

// Add CORS policy for React development server
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins(
            "http://localhost:5173",  // React dev server HTTP
            "https://localhost:5173"  // React dev server HTTPS
        )
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ReactTextRpg API v1"));
}

// Skip HTTPS redirection for development (since we're using HTTP)
// Only use HTTPS redirection in production
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseCors("ReactApp");
app.UseAuthorization();
app.MapControllers();

app.Run();
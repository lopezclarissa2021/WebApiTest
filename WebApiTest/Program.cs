
using WebApiTest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebApiTest.Data;

namespace WebApiTest
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<WebApiTestContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("WebApiTestContext") ?? throw new InvalidOperationException("Connection string 'WebApiTestContext' not found.")));

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            Content test = new Content
            {
                ContentId = 1,
                Title = "Toast",
                Body = "This is some text",
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                Author = "Jesse",
                Visibility = VisibilityStatus.Visible
            };

            app.Run();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApiTest.Areas.Identity.Data;
using WebApiTest.Models;

namespace WebApiTest.Data
{
    public class WebApiTestContext : IdentityDbContext<BlogUser>
    {
        public WebApiTestContext (DbContextOptions<WebApiTestContext> options)
            : base(options)
        {
        }

        public DbSet<WebApiTest.Models.Content> Content { get; set; } = default!;
        public DbSet<WebApiTest.Models.Category> Category { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // add seed data

            // Add User Data

            // Add Content Data


            // seed user
            

            

            modelBuilder.Entity<Category>().HasData(
                new Category
                {
                    CategoryId = 1,
                    CategoryName = "Food",
                    PostedContent = []
                },
                new Category
                {
                    CategoryId = 2,
                    CategoryName = "Tech",
                    PostedContent = []
                },
                new Category
                {
                    CategoryId = 3,
                    CategoryName = "News",
                    PostedContent = []
                },
                new Category
                {
                    CategoryId = 4,
                    CategoryName = "Tacos",
                    PostedContent = []
                }
            );

            modelBuilder.Entity<Content>().HasData(
                new Content
                {
                    ContentId = 1,
                    Title = "First Post",
                    Body = "Lorem ipsum and stuff",
                    //AuthorId = userId, // TODO: add in a base user to use
                    CreatedAt = new DateTime(2025, 02, 03),
                    UpdatedAt = new DateTime(2025, 02, 03),
                    Visibility = VisibilityStatus.Visible,
                    CategoryId = 3,
                    Category = null
                }    
            );


            // map navigation properties
            modelBuilder.Entity<Content>().Navigation(c => c.Category).AutoInclude();
            modelBuilder.Entity<Category>().Navigation(c => c.PostedContent).AutoInclude();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiTest.Models;

namespace WebApiTest.Data
{
    public class WebApiTestContext : DbContext
    {
        public WebApiTestContext (DbContextOptions<WebApiTestContext> options)
            : base(options)
        {
        }

        public DbSet<WebApiTest.Models.Content> Content { get; set; } = default!;
    }
}

using Microsoft.EntityFrameworkCore;
using NoteApi_3.Models;

namespace NoteApi_3.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
                
        }
        public DbSet<Note> Notes {  get; set;}
    }
}

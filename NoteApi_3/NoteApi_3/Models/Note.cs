using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoteApi_3.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; } 
        [Column(TypeName ="nvarchar(100)")]
        public string Title { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string Description { get; set; } 
        public DateTime CreatedDate { get; set; }   
        public DateTime UpdatedDate { get; set; }
        public DateTime CompletedDate { get; set;}
        public string SecurityCode { get; set; }
    }
}

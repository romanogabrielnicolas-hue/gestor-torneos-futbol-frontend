using System.ComponentModel.DataAnnotations.Schema;
namespace backend.Models;

public class Jugador
{
    public int Id { get; set; }

    public string Nombre { get; set; } = "";

    public string Dni { get; set; } = "";

    public int Edad { get; set; }

    public string Posicion { get; set; } = "";

    [Column("equipo_id")]
    public int? EquipoId { get; set; }

    public int Numero { get; set; }
}

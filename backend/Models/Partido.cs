
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Partido
{
    public int Id { get; set; }

    [Column("equipo_local_id")]
    public int EquipoLocalId { get; set; }

    [Column("equipo_visitante_id")]
    public int EquipoVisitanteId { get; set; }

    public DateTime Fecha { get; set; }

    public TimeSpan Hora { get; set; }

    public string Cancha { get; set; } = "";
}

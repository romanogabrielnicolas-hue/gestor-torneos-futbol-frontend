
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PartidosController : ControllerBase
{
    private readonly TorneoDbContext _context;

    public PartidosController(TorneoDbContext context)
    {
        _context = context;
    }

    // Obtener todos los partidos
    [HttpGet]
    public async Task<IActionResult> ObtenerPartidos()
    {
        var partidos = await _context.Partidos.ToListAsync();
        return Ok(partidos);
    }

    // Agregar un partido
    [HttpPost]
    public async Task<IActionResult> AgregarPartido(Partido partido)
    {
        _context.Partidos.Add(partido);
        await _context.SaveChangesAsync();

        return Ok(partido);
    }

    // Editar un partido
    [HttpPut("{id}")]
    public async Task<IActionResult> EditarPartido(int id, Partido partido)
    {
        var partidoExistente = await _context.Partidos.FindAsync(id);

        if (partidoExistente == null)
        {
            return NotFound();
        }

        partidoExistente.EquipoLocalId = partido.EquipoLocalId;
        partidoExistente.EquipoVisitanteId = partido.EquipoVisitanteId;
        partidoExistente.Fecha = partido.Fecha;
        partidoExistente.Hora = partido.Hora;
        partidoExistente.Cancha = partido.Cancha;

        await _context.SaveChangesAsync();

        return Ok(partidoExistente);
    }

    // Eliminar un partido
    [HttpDelete("{id}")]
    public async Task<IActionResult> EliminarPartido(int id)
    {
        var partido = await _context.Partidos.FindAsync(id);

        if (partido == null)
        {
            return NotFound();
        }

        _context.Partidos.Remove(partido);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}

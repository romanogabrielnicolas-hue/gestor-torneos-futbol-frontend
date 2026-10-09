using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EquiposController : ControllerBase
{
    private readonly TorneoDbContext _context;

    public EquiposController(TorneoDbContext context)
    {
        _context = context;
    }

    // GET: api/equipos
    [HttpGet]
    public async Task<IActionResult> ObtenerEquipos()
    {
        var equipos = await _context.Equipos.ToListAsync();

        return Ok(equipos);
    }

    // POST: api/equipos
    [HttpPost]
    public async Task<IActionResult> AgregarEquipo(Equipo equipo)
    {
        _context.Equipos.Add(equipo);

        await _context.SaveChangesAsync();

        return Ok(equipo);
    }
    // PUT: api/equipos/1
    [HttpPut("{id}")]
    public async Task<IActionResult> EditarEquipo(int id, Equipo equipo)
    {
        var equipoExistente = await _context.Equipos.FindAsync(id);

        if (equipoExistente == null)
        {
            return NotFound();
        }

        equipoExistente.Nombre = equipo.Nombre;
        equipoExistente.Color = equipo.Color;

        await _context.SaveChangesAsync();

        return Ok(equipoExistente);
    }
    // DELETE: api/equipos/1
    [HttpDelete("{id}")]
    public async Task<IActionResult> EliminarEquipo(int id)
    {
        var equipo = await _context.Equipos.FindAsync(id);

        if (equipo == null)
        {
            return NotFound();
        }

        _context.Equipos.Remove(equipo);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
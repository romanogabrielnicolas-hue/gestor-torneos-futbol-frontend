
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JugadoresController : ControllerBase
{
    private readonly TorneoDbContext _context;

    public JugadoresController(TorneoDbContext context)
    {
        _context = context;
    }

    // GET: api/jugadores
    [HttpGet]
    public async Task<IActionResult> ObtenerJugadores()
    {
        var jugadores = await _context.Jugadores.ToListAsync();

        return Ok(jugadores);
    }

    // POST: api/jugadores
    [HttpPost]
    public async Task<IActionResult> AgregarJugador(Jugador jugador)
    {
        _context.Jugadores.Add(jugador);

        await _context.SaveChangesAsync();

        return Ok(jugador);
    }
    // PUT: api/jugadores/1
    [HttpPut("{id}")]
    public async Task<IActionResult> EditarJugador(int id, Jugador jugador)
    {
        var jugadorExistente = await _context.Jugadores.FindAsync(id);

        if (jugadorExistente == null)
        {
            return NotFound();
        }

        jugadorExistente.Nombre = jugador.Nombre;
        jugadorExistente.Dni = jugador.Dni;
        jugadorExistente.Edad = jugador.Edad;
        jugadorExistente.Posicion = jugador.Posicion;
        jugadorExistente.EquipoId = jugador.EquipoId;
        jugadorExistente.Numero = jugador.Numero;

        await _context.SaveChangesAsync();

        return Ok(jugadorExistente);
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> EliminarJugador(int id)
    {
        var jugador = await _context.Jugadores.FindAsync(id);

        if (jugador == null)
        {
            return NotFound();
        }

        _context.Jugadores.Remove(jugador);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}

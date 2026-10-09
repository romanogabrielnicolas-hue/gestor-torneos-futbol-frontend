using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class TorneoDbContext : DbContext
{
    public TorneoDbContext(DbContextOptions<TorneoDbContext> options)
        : base(options)
    {
    }

    public DbSet<Equipo> Equipos { get; set; }
    public DbSet<Jugador> Jugadores { get; set; }

    public DbSet<Partido> Partidos { get; set; }
}
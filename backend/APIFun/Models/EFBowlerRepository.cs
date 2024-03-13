using Microsoft.EntityFrameworkCore;

namespace APIFun.Models
{
    public class EFBowlerRepository: IBowlerRepository
    {
        private BowlingLeagueContext _context;

        public EFBowlerRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowler> GetBowlersForMarlinsAndSharks()
        {
            return _context.Bowlers
                .Include(b => b.Team) // Include the Team navigation property
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList(); // Execute query and return as list
        }
    }
}

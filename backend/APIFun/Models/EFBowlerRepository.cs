namespace APIFun.Models
{
    public class EFBowlerRepository: IBowlerRepository
    {
        private BowlingLeagueContext _context;

        public EFBowlerRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        //do I keep this 
        public IEnumerable<Bowler> Bowlers => _context.Bowlers;
    }
}

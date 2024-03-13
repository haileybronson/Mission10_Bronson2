namespace APIFun.Models
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> GetBowlersForMarlinsAndSharks();
    }
}



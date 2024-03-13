using APIFun.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;

        public BowlingLeagueController(IBowlerRepository temp) { 
            _bowlerRepository = temp;
        }

        [HttpGet("marlins-sharks")]
        public IActionResult GetBowlersForMarlinsAndSharks()
        {
            var bowlers = _bowlerRepository.GetBowlersForMarlinsAndSharks();
            return Ok(bowlers);
        }
    }
}

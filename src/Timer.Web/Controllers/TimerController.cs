using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Timer.Web.Models;

namespace Timer.Web.Controllers {   

    [ApiController]
    [Route("api/[controller]")]
    public class TimerController : ControllerBase 
    {
        private string jsonFile = "timer.json";

        [HttpGet]
        public TimerModel Get()
        {
            using (StreamReader reader = new StreamReader(jsonFile))
            {
                string json = reader.ReadToEnd();
                var timers = JsonConvert.DeserializeObject<TimerModel>(json);
                return timers;
            }
        }

        [HttpPost("[action]")]
        public bool IncludeTimer([FromBody]TimerModel model) 
        {
            return true;
        }
    }
}
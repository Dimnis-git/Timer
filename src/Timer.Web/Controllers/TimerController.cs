using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Timer.Web.Models;

namespace Timer.Web.Controllers {   

    [ApiController]
    [Route("[controller]")]
    public class TimerController : ControllerBase {

        private string jsonFile = "../timer.json";

        [HttpGet]
        public IEnumerable<TimerModel> Get() {
            
            try
            {
                 var timerModel = JsonConvert.DeserializeObject<IEnumerable<TimerModel>>(jsonFile);
                 return timerModel;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }       
    }
}
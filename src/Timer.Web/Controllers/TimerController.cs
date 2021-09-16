using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Timer.Web.Models;

namespace Timer.Web.Controllers {   

    [ApiController]
    [Route("controller")]
    public class TimerController : ControllerBase {

        [HttpGet]
        public IEnumerable<TimerModel> Get() {
            return null;
        }       
    }
}
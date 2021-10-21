using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Timer.Web.Models;

namespace Timer.Web.Controllers {   

    [Route("api/[controller]/[action]")]
    public class TimerController : ControllerBase 
    {
        private string jsonData = "timer.json";

        [HttpGet]
        public IList<TimerModel> Get() {

            using (StreamReader r = new StreamReader(jsonData)) {
                string json = r.ReadToEnd();
                var result = JsonConvert.DeserializeObject<List<TimerModel>>(json);
                return result;
            }
        }

        [HttpPost]
        public void Post([FromBody]TimerModel timerModel) {

            using (StreamReader r = new StreamReader(jsonData)) {
                // Read the file and parse to JsonArray
                string file = r.ReadToEnd();
                var jsonArray = JArray.Parse(file);

                // Parse object and add to array
                JObject obj = JObject.FromObject(timerModel);
                jsonArray.Add(obj);

                // re-write all file with the new array
                string newJson = JsonConvert.SerializeObject(jsonArray, Formatting.Indented);
                System.IO.File.WriteAllText(jsonData, newJson);
            }
        }
    }
}
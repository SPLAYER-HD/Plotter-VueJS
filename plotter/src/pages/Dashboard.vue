<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="'text-left'">
                <h5 class="card-category">Graphics</h5>

                <h2 class="card-title">Plotter</h2>
              </div>
              <center>
                <div id="app">
                  <Draw :plotter="plotter" />
                  <textarea
                    ref="msg_textarea"
                    v-model="message"
                    @keyup="inputData()"
                    placeholder="..."
                  ></textarea>
                  <template v-for="line in warning_msg.split('\n')">
                    <p class="card-alert">{{ line }}</p>
                    <br />
                  </template>
                </div>
              </center>
            </div>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components/index";
import Draw from "@/components/Draw";
import Validations from "@/utils/Validations";

export default {
  components: {
    Card,
    Draw
  },
  data() {
    return {
      warning_msg: "",
      message: "",
      plotter: [],
      info: [],
      cont: 0
    };
  },
  methods: {
    inputData: function() {
      let textarea = this.$refs.msg_textarea;
      const validations = new Validations();
      this.warning_msg = validations.validateCommandsFormat(textarea);
      let reg = /c[ ]\d+[ ]\d+[ ]\d+|p\s(\d+[,]\d+\s{0,1})+|r[ ]\d+[ ]\d+[ ]\d+[ ]\d+/g;
      this.plotter = this.message.match(reg);
      if (this.plotter != null) {
        this.plotter.forEach((element, index) => {
          let split = element.split(" ");
          if (split[0] == "c") {
            let circle = {
              i: split[0],
              x: split[1],
              y: split[2],
              r: split[3]
            };
            this.plotter[index] = circle;
          } else if (split[0] == "r") {
            let rectangle = {
              i: split[0],
              x: split[1],
              y: split[2],
              w: split[3],
              h: split[4]
            };
            this.plotter[index] = rectangle;
          } else if (split[0] == "p") {
            let splitPolygon = element.split("p");
            let polygon = {
              i: "p",
              points: splitPolygon[1].trim()
            };
            this.plotter[index] = polygon;
          }
        });
      }
    }
  }
};
</script>
<style></style>

<template>
  <table class="egt">
    <tr>
      <td>
        <div>
          <v-sheet
            class="mx-10 d-flex"
            tile
            height="35"
            color="#B8B8B8"
            dark="true"
            width="550"
          >
            <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h3>Mont: August Year: 2020</h3>
            <v-spacer></v-spacer>
            <v-btn icon class="ma-2" @click="$refs.calendar.next()">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-sheet>
          <v-sheet height="600" width="550" class="mx-10">
            <v-calendar
              ref="calendar"
              v-model="value"
              :weekdays="weekday"
              :type="type"
              :events="events"
              :event-overlap-mode="mode"
              :event-overlap-threshold="30"
              :event-color="getEventColor"
              @change="getEvents"
            ></v-calendar>
          </v-sheet>
        </div>
      </td>
      <td>
        <h2 style="color:#069">People for A1 and A2 titulations:</h2>
        <ul>
          <li><h3>Childs under 12</h3></li>
          <li><h3>Adults</h3></li>
          <li><h3>Adults over 65</h3></li>
        </ul>
        <h2 style="color:#069">People for B1 titulations:</h2>
        <ul>
          <li><h3>Childs under 12</h3></li>
          <li><h3>Adults</h3></li>
          <li><h3>Adults over 65</h3></li>
        </ul>
        <h2 style="color:#069">People for B2 titulations:</h2>
        <ul>
          <li><h3>Adults oidoaisdosa</h3></li>
          <li><h3>Adults over 65</h3></li>
        </ul>
        <h2 style="color:#069">People for C1 titulations:</h2>
        <ul>
          <li><h3>Adults</h3></li>
          <li><h3>Adults over 65</h3></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data: () => ({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] }
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "#F05252",
      "deep-purple",
      "cyan",
      "green",
      "#76B223",
      "grey darken-1"
    ],
    names: [
      "B1",
      "A1",
      "A2",
      "B1",
      "C1",
      "C1-S",
      "B1-S",
      "B2-S"
    ]
  }),
  methods: {
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    formatDate(a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() +
            1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
    }
  }
};
</script>

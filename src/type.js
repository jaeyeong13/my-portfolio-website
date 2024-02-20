"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 50,
})
  .move(-11)
  .type("Amazing ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .type("Back-end Engineer")
  .pause(1000)
  .move(-9)
  .delete(9)
  .type("Full-Stack")
  .pause(1000)
  .delete(10)
  .type("Front-end")
  .pause(1000)
  .delete()
  .go();

"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .move(-11)
  .type("Amazing ")
  .pause(1050)
  .move(null, { to: "END" })
  .delete()
  .type("Back-end Engineer")
  .pause(1050)
  .move(-9)
  .delete(9)
  .type("Full-Stack")
  .pause(1050)
  .delete(10)
  .type("Front-end")
  .pause(1050)
  .move(9)
  .delete()
  .go();

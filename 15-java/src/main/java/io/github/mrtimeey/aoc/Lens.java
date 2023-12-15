package io.github.mrtimeey.aoc;

public class Lens {
   private String name;
   private int focalLength;

   public Lens(String name, int focalLength) {
      this.name = name;
      this.focalLength = focalLength;
   }

   static Lens of(String name, int focalLength) {
      return new Lens(name, focalLength);
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public int getFocalLength() {
      return focalLength;
   }

   public void setFocalLength(int focalLength) {
      this.focalLength = focalLength;
   }
}

package io.github.mrtimeey.aoc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class HashUtils {

   public static int hashValues(String inputStrings) {
      return Arrays.stream(inputStrings.split(","))
            .map(HashUtils::hashValue)
            .reduce(Integer::sum)
            .orElse(0);
   }

   public static int focusingPower(String inputStrings) {
      List<List<Lens>> boxes = new ArrayList<>();
      for (int i = 0; i < 256; i++) {
         boxes.add(new ArrayList<>());
      }
      for (String input : inputStrings.split(",")) {
         if (input.contains("-")) {
            String toRemove = input.replace("-", "");
            boxes.get(hashValue(toRemove)).removeIf(l -> l.getName().equals(toRemove));
         }
         if (input.contains("=")) {
            String[] split = input.split("=");
            Lens newLens = Lens.of(split[0], Integer.parseInt(split[1]));
            int boxIndex = hashValue(newLens.getName());
            if (boxes.get(boxIndex).stream().anyMatch(l -> l.getName().equals(newLens.getName()))) {
               boxes.get(boxIndex).stream()
                     .filter(l -> l.getName().equals(newLens.getName()))
                     .forEach(l -> l.setFocalLength(newLens.getFocalLength()));
            } else {
               boxes.get(boxIndex).add(newLens);
            }
         }
      }
      int total = 0;
      for (int boxIndex = 0; boxIndex < boxes.size(); boxIndex++) {
         for (int slotIndex = 0; slotIndex < boxes.get(boxIndex).size(); slotIndex++) {
            total += (boxIndex+1) * (slotIndex + 1) * boxes.get(boxIndex).get(slotIndex).getFocalLength();
         }
      }
      return total;
   }

   public static int hashValue(String input) {
      int currentValue = 0;
      for (char c : input.toCharArray()) {
         currentValue += (int) c;
         currentValue = currentValue * 17;
         currentValue = currentValue % 256;
      }
      return currentValue;
   }

}

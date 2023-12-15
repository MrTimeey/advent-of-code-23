package io.github.mrtimeey.aoc;

import org.junit.jupiter.api.Test;

import static io.github.mrtimeey.aoc.HashUtils.focusingPower;
import static io.github.mrtimeey.aoc.HashUtils.hashValue;
import static io.github.mrtimeey.aoc.HashUtils.hashValues;
import static org.assertj.core.api.Assertions.assertThat;

class HashUtilsTest {

   @Test
   void testHashValue() {
      int result = hashValue("HASH");
      assertThat(result).isEqualTo(52);
   }

   @Test
   void testHashValues() {
      int result = hashValues("rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7");
      assertThat(result).isEqualTo(1320);
   }

   @Test
   void testBoxes() {
      int result = focusingPower("rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7");
      assertThat(result).isEqualTo(145);
   }

}

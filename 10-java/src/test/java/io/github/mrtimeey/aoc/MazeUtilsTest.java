package io.github.mrtimeey.aoc;

import io.github.mrtimeey.aoc.utils.MazeUtils;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class MazeUtilsTest {

   @Test
   void testSimpleExample() {
      List<String> input = List.of(
            ".....",
            ".S-7.",
            ".|.|.",
            ".L-J.",
            "....."
      );

      int result = MazeUtils.calculateFarthestPoint(input);

      assertThat(result).isEqualTo(4);
   }

   @Test
   void testComplexExample() {
      List<String> input = List.of(
            "...|.",
            "..F7.",
            ".FJ|.",
            "SJ.L7",
            "|F--J",
            "LJ..."
      );

      int result = MazeUtils.calculateFarthestPoint(input);

      assertThat(result).isEqualTo(8);
   }

   @Test
   void testCalculateTiles() {
      List<String> input = List.of(
            "...........",
            ".S-------7.",
            ".|F-----7|.",
            ".||.....||.",
            ".||.....||.",
            ".|L-7.F-J|.",
            ".|..|.|..|.",
            ".L--J.L--J.",
            "..........."
      );

      int result = MazeUtils.calculateTiles(input);

      assertThat(result).isEqualTo(4);
   }

   @Test
   void testCalculateTilesNearClosing() {
      List<String> input = List.of(
            "..........",
            ".S------7.",
            ".|F----7|.",
            ".||....||.",
            ".||....||.",
            ".|L-7F-J|.",
            ".|..||..|.",
            ".L--JL--J.",
            ".........."
      );

      int result = MazeUtils.calculateTiles(input);

      assertThat(result).isEqualTo(4);
   }

   @Test
   void testCalculateTilesComplexMaze() {
      List<String> input = List.of(
            ".F----7F7F7F7F-7....",
            ".|F--7||||||||FJ....",
            ".||.FJ||||||||L7....",
            "FJL7L7LJLJ||LJ.L-7..",
            "L--J.L7...LJS7F-7L7.",
            "....F-J..F7FJ|L7L7L7",
            "....L7.F7||L7|.L7L7|",
            ".....|FJLJ|FJ|F7|.LJ",
            "....FJL-7.||.||||...",
            "....L---J.LJ.LJLJ..."
      );

      int result = MazeUtils.calculateTiles(input);

      assertThat(result).isEqualTo(8);
   }

   @Test
   void testCalculateTilesMoreComplexMaze() {
      List<String> input = List.of(
            "FF7FSF7F7F7F7F7F---7",
            "L|LJ||||||||||||F--J",
            "FL-7LJLJ||||||LJL-77",
            "F--JF--7||LJLJ7F7FJ-",
            "L---JF-JLJ.||-FJLJJ7",
            "|F|F-JF---7F7-L7L|7|",
            "|FFJF7L7F-JF7|JL---7",
            "7-L-JL7||F7|L7F-7F7|",
            "L.L7LFJ|||||FJL7||LJ",
            "L7JLJL-JLJLJL--JLJ.L"
      );

      int result = MazeUtils.calculateTiles(input);

      assertThat(result).isEqualTo(10);
   }
}

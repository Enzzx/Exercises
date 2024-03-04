package main

import (
	"fmt"
	"math"
)

func closest(x, y float64) bool {
	diff := math.Abs(y-x)
	tolerance := 0.001
	
	return diff <= tolerance
}

func Sqrt(x float64) float64 {
	y := 1.0
	for i := 0; i < 10; i++ {
		fmt.Println(y)
		y -= (y*y-x)/(2*y)
		if closest(x, y*y) { break }
	}
	return y
}

func main() {
	fmt.Println(Sqrt(126))
}
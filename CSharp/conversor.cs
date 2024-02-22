using System;
using System.Collections.Generic;

public class Conversion
{
    Console.WriteLine("type 1 to convert binary to decimal\ntype 2 to convert decimal to binary");
    string type = Console.ReadLine();
    	
   	if (type == "1") {
    	ByToDec();
   	} else if (type == "2") {
   		DecToBy();
   	} else {
   		Console.WriteLine("•_•");
   	}
    	
   	static void ByToDec() 
   	{
	    Console.WriteLine("type a binary number");
	    int binary = Convert.ToInt32(Console.ReadLine());
        List<int> bitList = new List<int>();
	       
	    while(binary > 0)
	    {
            int value = binary % 10;
            bitList.Insert(bitList.Count, value);
            binary /= 10;
        }
	       
        int dcimal = 0;
        for (int i = 0; i < bitList.Count; i++)
        {
	       dcimal += (int)Math.Pow(2, i) * bitList[i];
	    }
        Console.WriteLine($"the binary values is: {dcimal}");
   	}
    	
   	static void DecToBy() {
   		Console.WriteLine("type a decimal number");
    	int dcimal = Convert.ToInt32(Console.ReadLine());
    	string bits = "";
    	
    	while (dcimal > 1)
    	{
    		int rest = dcimal % 2;
    		dcimal = dcimal / 2;
    		bits = Convert.ToString(rest) + bits;
    	}
    	bits = Convert.ToString(dcimal) + bits;
    	Console.WriteLine(bits);
   	}
}

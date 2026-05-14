// Input 5 numbers
// Print sum
//Find max element
//Reverse array

#include<iostream>
using namespace std;

int main()
{
    int arr[5];
    int sum = 0;

    cout << "Enter 5 numbers: ";

    for(int i = 0; i < 5; i++)
    {
        cin >> arr[i];
        sum = sum + arr[i];   // adding each number
    }
    int max = arr[0];   // assume first element is maximum

    for(int i = 1; i < 5; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }

    cout << "The numbers you entered are: ";

    for(int i = 0; i < 5; i++)
    {
        cout << arr[i] << " ";
    }

    cout << "\nSum = " << sum;
    cout << "\nMaximum element = " << max;
    cout << "\nReversed array: ";

    for(int i = 4; i >= 0; i--)
    {
        cout << arr[i] << " ";
    }

    return 0;
}
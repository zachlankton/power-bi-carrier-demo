# Power BI Carrier Demo

2
​
3
This is my first Power BI Visual that I made as a demo for a friend.
4
​
5
It's primary purpose was to be a table with clickable rows that would expand into a details view.
6
​
7
To setup up you drag the columns that you want in the table into the `Summary` section and the columns that you want in the details view into the `Details` section.
8
​
9
![image](https://user-images.githubusercontent.com/2927894/182136352-a427b1ef-236e-4872-9cfe-90da5d809098.png)
10
​
11
This will result in a table like so:
12
​
13
![image](https://user-images.githubusercontent.com/2927894/182137627-2abdaac1-63c2-4fd5-8a24-1593c5c1c6ae.png)
14
​
15
​
16

---

17
​
18

# Development

19
​
20
Need to setup pbiviz -> https://docs.microsoft.com/en-us/power-bi/developer/visuals/environment-setup?tabs=windows

then run

```
pbiviz start
21
```

# Build and Package

Run:

```
pbiviz package
```

the custom viz will be in the `dist` folder. You can then [import the custom visual into power bi using that file](https://docs.microsoft.com/en-us/power-bi/developer/visuals/import-visual)​

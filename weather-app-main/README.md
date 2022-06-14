<div align="center">
<br>


  
  # The World Weather
  
</div>

<div align="center">
<br>


### _Weather application built using ReactJs, OpenCage Api and OpenWeatherMap Api_

</div>

<br>

## Tech Stack and Dependencies

<br>

| <div align ="center">Name </div>                     | <div align = "center">Description</div> |
| ---------------------------------------------------- | --------------------------------------- |
| **[ReactJs](https://reactjs.org)**                   | Front End                               |
| **[OpenCage](https://opencagedata.com/)**            | Geocoding API                           |
| **[OpenWeatherMap](https://openweathermap.org/api)** | Weather API                             |

<br>

## Find the app [here](https://www.theworldweather.tk).

## Instructions
#### git clone https://github.com/luisruizs/luisruizs.github.io.git
#### cd luisruizs.github.io/weather-app-main
#### sudo apt install npm
#### npm install
#### npm start
## Iptables
#### sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 3000
#### sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
#### sudo apt install iptables-persistent
#### sudo /sbin/iptables-save > /etc/iptables/rules.v4
#### sudo /sbin/ip6tables-save > /etc/sysconfig/ip6tables
## Flush iptables
#### sudo iptables -F
<br>




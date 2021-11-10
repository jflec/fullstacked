require 'rest-client'
require 'json'
require 'byebug'

response = RestClient.get 'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json'
champions_arr = JSON.parse(response)["data"]
# debugger
champions_arr.each do |champions|
    Champion.create(
        name: champions[1]["name"],
        title: champions[1]["title"],
        blurb: champions[1]["blurb"],
        info: champions[1]["info"],
        tags: champions[1]["tags"]
    )
end

class Api::V1::BadgesController < ApplicationController

    require 'rest-client'

    def get_badges
        url = "https://sandbox-api.youracclaim.com/"
        response = RestClient.get(url)
        json = JSON.parse response
    end

    def index 
        @badges = Badges.all.order(name: :asc)
        render json: @badges
    end

    def show
        @badges = Badges.find(params[:id])
        render json: @badges
    end
 end

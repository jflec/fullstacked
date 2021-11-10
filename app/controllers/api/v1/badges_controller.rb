class Api::V1::BadgesController < ApplicationController

    # require 'rest-client'

    # def get_badges
    #     response = RestClient.get("https://sandbox-api.youracclaim.com/")
    #     render json: response
    # end

    def index 
        @badges = Badges.all.order(name: :asc)
        render json: @badges
    end

    def show
        @badges = Badges.find(params[:id])
        render json: @badges
    end
 end



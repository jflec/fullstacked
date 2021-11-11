class Api::V1::BadgesController < ApplicationController
    def index 
        @badges = Badges.all.order(name: :asc)
        render json: @badges
    end

    def show
        @badges = Badges.find(params[:id])
        render json: @badges
    end
 end



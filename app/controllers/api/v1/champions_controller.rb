class Api::V1::ChampionsController < ApplicationController

    def index 
        @champions = Champion.all.order(name: :asc)
        render json: @champions
    end

    def show
        @champion = Champion.find(params[:id])
        render json: @champion
    end
 end

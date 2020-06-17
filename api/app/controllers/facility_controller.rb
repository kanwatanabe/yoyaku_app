class FacilityController < ApplicationController

    def index
        @facility = Facility.all
        render json: @facility
    end
end

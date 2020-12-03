class Job < ApplicationRecord
    belongs_to :agency
    
    def self.search(query)
        Job.where('title LIKE ?', "%#{query}%")
    end
end

class Job < ApplicationRecord
    def self.search(query)
        Job.where('title LIKE ?', "%#{query}")
    end
end

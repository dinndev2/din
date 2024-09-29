class Note < ApplicationRecord
  belongs_to :referencable, polymorphic: true, optional: true
end

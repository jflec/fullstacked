class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.string :badge_id, index: true
      t.string :name, index: true
      t.string :description
      t.string :image_url
      t.string :owner
      t.string :skills
      t.belongs_to :champion, null: false, foreign_key: true

      t.timestamps
    end
  end
end

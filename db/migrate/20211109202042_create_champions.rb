class CreateChampions < ActiveRecord::Migration[6.1]
  def change
    create_table :champions do |t|
      t.string :name, index: true
      t.string :tags, index: true
      t.string :title
      t.string :blurb
      t.string :info


      t.timestamps
    end
  end
end

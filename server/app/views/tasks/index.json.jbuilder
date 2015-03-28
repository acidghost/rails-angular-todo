json.array!(@tasks) do |task|
  json.extract! task, :id, :text, :done
  json.url user_task_url(task.user, task, format: :json)
end

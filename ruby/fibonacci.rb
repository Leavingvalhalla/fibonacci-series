def fibonacci(num)
  return num if num < 2
  return 1 if num == 2
  x = 1
  y = 1  
  sum = 0
  for i in 3..num do
    sum = x + y
    x, y = y, sum
  end
  sum
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

puts fibonacci(10)
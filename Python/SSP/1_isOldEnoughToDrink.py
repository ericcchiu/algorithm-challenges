# Write a function called “isOldEnoughToDrink”.
# Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person 
# of this given age is old enough to legally drink in the United States.
# Notes:
# The legal drinking age in the United States is 21.

def is_old_enough_to_drink(age):
  if age >= 21:
    return True
  elif age < 21:
    return False

print(is_old_enough_to_drink(23)) # Expect True
print(is_old_enough_to_drink(20)) # Expect False 

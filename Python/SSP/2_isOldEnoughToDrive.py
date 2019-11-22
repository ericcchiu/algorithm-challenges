# Write a function called “isOldEnoughToDrive”.
# Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
# Notes:
# The legal driving age in the United States is 16.

def is_old_enough_to_drive(age):
  if age >= 16: 
    return True
  elif age < 16: 
    return False

print(is_old_enough_to_drive(23)) # Expect true
print(is_old_enough_to_drive(16)) # Expect true
print(is_old_enough_to_drive(15)) # Expect false


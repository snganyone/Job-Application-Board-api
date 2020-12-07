# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Job.create(title: "Software Engineer", employer: "Google", location: "Silicon Valley, CA", description: "Develop software apps", release_date: "11/25/20", job_type: "Full-Time", agency_id: 1)
Job.create(title: "Network Engineer", employer: "Cisco", location: "Houston, TX", description: "Maintain network security", release_date: "10/13/20", job_type: "Full-Time", agency_id: 2)
Job.create(title: "System Architect", employer: "Microsoft", location: "New York, NY", description: "Computer Programming", release_date: "8/14/20", job_type: "Full-Time", agency_id: 2)

Agency.create(name: "Addeco", bio: "Help people find jobs", agency_type: "Temp")
Agency.create(name: "Atlas", bio: "Here to help find the perfect fit", agency_type: "Temp-to-Perm")

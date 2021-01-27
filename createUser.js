db.createUser({
    user: 'oops',
    pwd:'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

// This code would create an admin user with read and writing abilities.